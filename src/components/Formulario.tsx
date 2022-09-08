import {
    Button,
    Col,
    DatePicker,
    Form,
    Input,
    Row,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usuariosService } from '../service/resources/usuariosService';

interface UsuariosPropType {
    onView?: boolean;
    onCreate?: boolean;
}


const Formulario = ({ onView = false, onCreate = false }: UsuariosPropType) => {
    const [form] = Form.useForm();

    const { cpf } = useParams();

    const getUsuarioCpf = async () => {
        console.log(cpf);
        if(cpf){
        const {data} = await usuariosService.buscarByCpf(cpf);
        form.setFieldsValue({...data, birthDate: new Date(data.birthDate)});
        }
    }

    useEffect(()=>{
        if(onView)
            getUsuarioCpf();
    }, [])

    

    const onFinish = async (user: any) => {
        const usuario = await usuariosService.create(user);
        console.log(usuario);
    };


    return (

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
                                message: 'Please input your name!',
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
                                message: 'Please input your CPF!',
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
                                message: 'Please input your RG!',
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
                                message: 'Please input your Data de Nascimento!',
                            },
                        ]}

                    >
                        {onView?"11/11/1997":
                        <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" disabledDate={(d) => !d || d.isAfter(new Date())} />
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
                                message: 'Please input your nome da mãe!',
                            },
                        ]}

                    >
                        <Input />
                    </Form.Item>
                </Col>

                <Col span="24" style={{ display: "flex", justifyContent: "space-between" }}>
                    <Form.Item>
                        <Button type="primary" danger htmlType="reset">
                            Limpar
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>


                </Col>



            </Row>
        </Form>

    );
};

export default Formulario;