import {
    Button,
    Col,
    DatePicker,
    Form,
    Input,
    Row,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { usuariosService } from '../service/resources/usuariosService';
import Usuarios from './Usuarios';
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';


const Formulario = () => {
    const [form] = Form.useForm();
    const { cpf } = useParams();

    const getUsuarioCpf = async () => {
        if (cpf) {
            const { data } = await usuariosService.buscarByCpf(cpf);
            form.setFieldsValue(data);
        }
    }

    const onFinish = async (user: any) => {
        try {
            const usuario = await usuariosService.create(user);
            toast.success('Usuário cadastrado com sucesso!!');
        } catch (error) {
            toast.error('Erro ao cadastrar usuário!!');
        } finally {
            form.resetFields();
        }
    };

    useEffect(() => {
        if (cpf) {
            getUsuarioCpf();
        } else {
            form.resetFields();
        }
    }, [cpf])

    return (
        <div className="container">
            <Row justify="space-between" align="top">
                <h1>
                    <strong>Cadastro de Usuários</strong>
                </h1>
                
            </Row>

            <Form
                style={{ padding: "2rem", width: "100%", display: "flex", justifyContent: "center" }}
                form={form}
                name="register"
                layout="vertical"
                onFinish={onFinish}

            >
                <Row>
                    <Col span="24">
                        <Form.Item
                            name="name"
                            label="Nome"
                            rules={[
                                {
                                    required: true,
                                    message: 'Informe o seu nome!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span="24">
                        <Form.Item

                            name="cpf"
                            label="CPF"
                            rules={[
                                {
                                    required: true,
                                    message: 'Informe o seu CPF!',
                                },

                            ]}


                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span="24">
                        <Form.Item
                            name="rg"
                            label="RG"
                            rules={[
                                {
                                    required: true,
                                    message: 'Informe o seu RG!',
                                },
                            ]}

                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span="24">
                        <Form.Item
                            name="birthDate"
                            label="Data de Nascimento"
                            rules={[
                                {
                                    required: true,
                                    message: 'Informe sua Data de Nascimento!',
                                },
                            ]}

                        >
                            {!cpf ?
                                <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY"/>
                                : <Input />
                            }
                        </Form.Item>
                    </Col>

                    <Col span="24">
                        <Form.Item
                            name="motherName"
                            label="Nome da Mãe"
                            rules={[
                                {
                                    required: true,
                                    message: 'Informe o nome da sua mãe!',
                                },
                            ]}

                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    {!cpf &&
                        <Col span="24" style={{ display: "flex", justifyContent: "space-between" }}>
                            <Form.Item>
                                <Button type="primary" danger htmlType="reset">
                                    Limpar
                                </Button>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" >
                                    Cadastrar
                                </Button>
                            </Form.Item>

                        </Col>
                    }

                </Row>
            </Form>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>

    );
};

export default Formulario;