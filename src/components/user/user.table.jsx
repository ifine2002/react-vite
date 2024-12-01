import { Table } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';

const UserTable = () => {

    const [dataUsers, setDataUsers] = useState([
        { _id: "hui", fullName: "Eric", email: "eric@gmail.com" },
        { _id: "hu1i", fullName: "Eric", email: "eric4@gmail.com" },
        { _id: "h2ui", fullName: "Hoidanit", email: "eri2c@gmail.com" }
    ]);

    useEffect(() => {
        console.log(">>>> run useEffect 1111")
        loadUser();
    }, []);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        }
    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }

    console.log(">>>>>>> run render 0000")

    return (
        <Table
            columns={columns}
            dataSource={dataUsers}
            rowKey="_id"
        />
    )
}

export default UserTable;