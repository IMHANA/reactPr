import { PureComponent } from "react";
import { connect } from 'react-redux';
import { actionCreators as userActions } from "../redux/modules/user";
import axios from 'axios';
import UserItem from './UserItem'


const user = {
    id: 1,
    name: "foo",
    tel: "010-1111-2222",
    email: "haaaaa@email.com",
    bookmark: "T"
}

class User extends PureComponent {

    componentDidMount() {
        // const { setUsers } = this.props;
        // setUsers([user])
        this.getUsers();
    }

    getUsers = async() => {
        const { setUsers } = this.props;
        const users = await axios({
            method:"GET",
            url: "http://localhost:3000/user/list"        
        });
        setUsers(users.data);
    }

    addUsers = async() => {

    }

    updateUsers = async() => {
        
    }

    render() {
        const { users } = this.props;
        console.log(this.props);
        return (
            <div>
                <table>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>tel</th>
                        <th>email</th>
                        <th>bookmark</th>
                    </tr>
                    { users.map((user) => {
                        return (
                            <UserItem user={user} />
                        )
                    })}
                </table>

                <div>
                    <input type="text"/>
                    &nbsp;
                    <button>추가</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {user: {users}} = state;

    return {
        users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setUsers: (users) => dispatch(userActions.setUsers(users)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);