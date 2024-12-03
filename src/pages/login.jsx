import { Button, Input, Form, notification, Row, Col, Divider } from "antd";
import { registerUserAPI } from "../services/api.service";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from '@ant-design/icons';

const LoginPage = () => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log(">>>> check value: ", values)
        //cal api
        // const res = await registerUserAPI(
        //     values.fullName,
        //     values.email,
        //     values.password,
        //     values.phone)
        // if (res.data) {
        //     notification.success({
        //         message: "Register user",
        //         description: "Đăng ký user thành công"
        //     })
        //     navigate("/login");
        // } else {
        //     notification.error({
        //         message: "Error Register user",
        //         description: JSON.stringify(res.message)
        //     })
        // }
    }
    return (
        <Row justify={"center"} style={{ marginTop: "30px" }}>
            <Col xs={24} md={16} lg={8}>
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }}>
                    <legend>Đăng Nhập</legend>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        style={{ margin: "20px" }}
                    // onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Email không được để trống!',
                                },
                                {
                                    type: "email",
                                    message: 'Email không đúng định dạng!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Password không được để trống!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Button
                                onClick={() => form.submit()}
                                type="primary">Login</Button>
                            <Link to="/">Go to homepage  <ArrowRightOutlined /></Link>
                        </div>
                    </Form>
                    <Divider />
                    <div style={{ textAlign: "center" }}>Chưa có tài khoản? <Link to={"/register"}>Đăng ký tại đây</Link></div>
                </fieldset>
            </Col>
        </Row>
    )
}
export default LoginPage;