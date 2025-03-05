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
                        style={{
                            backgroundColor: '#612C4F',
                            padding: '1rem',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '10px',
                            outline: 'none',
                        }}
                        className='!placeholder-[#FFFFFF99]'
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password
                        placeholder="Password"
                        size="large"
                        style={{
                            backgroundColor: '#612C4F',
                            padding: '1rem',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '10px',
                            outline: 'none',
                        }}
                        className="[&>input::placeholder]:!text-[#FFFFFF99] [&_.anticon]:!text-[#FFFFFF] [&_.anticon:hover]:!text-[#EE10B0]"
                    />
                </Form.Item>

                <Form.Item>
                    <Flex justify="space-between" align="center" className='mb-4'>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox
                                style={{
                                    color: '#FFFFFF99',
                                }}
                                className='[&_.ant-checkbox-checked_.ant-checkbox-inner]:!bg-[#EE10B0] 
                                        [&_.ant-checkbox-checked_.ant-checkbox-inner]:!border-[#EE10B0]
                                        hover:[&_.ant-checkbox-inner]:!border-[#EE10B0]'
                            >
                                Remember me
                            </Checkbox>
                        </Form.Item>
                        <a href="#"
                            style={{
                                color: '#FFFFFF99'
                            }}
                            className='hover:!text-[#EE10B0]'>Forgot password?</a>
                    </Flex>
                </Form.Item>

                <Form.Item>
                    <Button
                        block
                        type="primary"
                        htmlType="submit"
                        size="large"
                        style={{
                            backgroundColor: '#EE10B0',
                            border: 'none',
                            outline: 'none',
                            padding: '2rem'
                        }}
                        className='hover:!bg-[#C00E90]'
                    >
                        Log in
                    </Button>
                    <p className='text-center text-white mt-4'>
                        or <a href="#"
                         style={{
                            color: '#EE10B0'
                         }}
                         className='hover:!underline'>Register now!</a>
                    </p>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
