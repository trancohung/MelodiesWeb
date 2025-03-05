import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import logo from '../assets/logo-no-background.png';

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className='bg-[#412C3A] min-h-screen flex flex-col justify-center items-center gap-16 p-8'>
            {/* Logo và tiêu đề */}
            <div className='flex flex-col items-center gap-4'>
                <img src={logo} alt='logo' className='w-32 h-32 object-cover' />
                <h1 className='text-white text-5xl font-bold'>Melodies</h1>
            </div>

            {/* Form đăng nhập */}
            <Form
                name="login"
                initialValues={{
                    remember: true,
                }}
                className='w-full max-w-xl'
                onFinish={onFinish}
            >
                <h2 className='text-white text-3xl mb-6 text-center font-bold'>Login to continue</h2>

                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input
                        placeholder="Username"
                        size="large"
                        className='!bg-[#612C4F] !p-4 !text-white !border-none !placeholder-[#FFFFFF99]'
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password
                        placeholder="Password"
                        size="large"
                        className="!bg-[#612C4F] !p-4 !text-white !border-none [&>input]:!placeholder-[#FFFFFF99]"
                    />
                </Form.Item>

                <Form.Item>
                    <Flex justify="space-between" align="center" className='mb-4'>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox className='!text-white'>Remember me</Checkbox>
                        </Form.Item>
                        <a href="#" className=''>Forgot password?</a>
                    </Flex>
                </Form.Item>

                <Form.Item>
                    <Button
                        block
                        type="primary"
                        htmlType="submit"
                        size="large"
                        className='!bg-[#EE10B0] hover:!bg-[#C00E90] !font-bold !p-6 !text-lg'
                    >
                        Log in
                    </Button>
                    <p className='text-center text-white mt-4'>
                        or <a href="#" className='text-[#EE10B0] hover:underline'>Register now!</a>
                    </p>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
