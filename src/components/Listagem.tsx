import { DeleteOutlined, EditOutlined, EyeOutlined, FilterOutlined } from '@ant-design/icons';
import { Button, Col, Collapse, Form, Input, Modal, Pagination, Popconfirm, Radio, Row, Select, Space, Table } from 'antd';
import { TableProps } from 'antd/es/table';
import { ColumnProps, ColumnsType } from 'antd/lib/table';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { ToastContainer, toast } from 'react-toastify';
import '../App.css';
import { UserType } from '../models/User';
import { usuariosService } from '../service/resources/usuariosService';
import { filterProps } from '../types/Filter';
import { PaginationProps } from '../types/Pagination';
import { OPCOES_TAMANHO_PAGINA } from '../utils/Table';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Listagem = ({ }) => {

    const [form] = Form.useForm();
    const [formAvancado] = Form.useForm();

    const [usuarios, setUsuarios] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [loading, setLoanding] = useState(false);

    const [paginacao, setPaginacao] = useState({
        currentPage: 0,
        totalElements: 0,
        size: OPCOES_TAMANHO_PAGINA[1],
    } as PaginationProps);

    const [filter, setFilter] = useState({
        ativo: true,
        page: 0,
        size: OPCOES_TAMANHO_PAGINA[1],
        name: '',
        cpf: '',
        rg: ''
    } as filterProps);

    const columns: ColumnProps<UserType>[] = [
        {
            title: 'Nome',
            dataIndex: 'name',
            filterSearch: true,
            //onFilter: (value: string, record) => record.address.startsWith(value),
            width: '30%',
            render: (text: string) => (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#1890ff",
                        padding: 0,
                        color: "#fff",
                    }}
                    searchWords={[filter?.name]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />)
        },

        {
            title: 'CPF',
            dataIndex: 'cpf',
            render: (text: string) => (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#1890ff",
                        padding: 0,
                        color: "#fff",
                    }}
                    searchWords={[filter?.cpf]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />)

        },

        {
            title: 'RG',
            dataIndex: 'rg',
            render: (text: string) => text
        },

        {
            title: 'Data de Nascimento',
            dataIndex: 'birthDate',
            render: (text: string) => text
            //render: (text:any)=> moment(new Date(text), 'DD-MM-YYYY'),
        },

        {
            title: 'Nome da Mãe',
            dataIndex: 'motherName',
            render: (text: string) => text
        },

        {
            title: 'Data de Registro',
            dataIndex: 'registrationDate',
            render: (text: string) => text
            //render: (text:any)=> moment(new Date(text), 'DD-MM-YYYY'),
        },

        {
            title: <strong>ações</strong>,
            align: 'center',
            key: 'action',
            fixed: 'right',
            render: ({ cpf }: UserType) => (
                <Space size="large">
                    {/* <Button
                              style={{ background: "#f3f5a0", color: "white", borderRadius: 10 }}
                              type="primary"
                              ghost
                              className="action-button"
                              title={`Visualizar indivíduo ${nome}`}
                          // onClick={() =>
                          //     history.push(urls.PESSOAS_DETAILS.replace(":codigo", codigo))
                          // }
                          >
                              <EyeOutlined style={{ fontSize: "1.2rem" }} />
                          </Button> */}

                    <Button
                        //onClick={() => alert('ok')}
                        style={{

                            color: 'black',
                            borderRadius: 10,
                            border: 'none',
                        }}
                        //type="primary"
                        className="action-button"
                        title={`Visualizar indivíduo ${cpf}`}
                    // onClick={() =>
                    //     history.push(urls.PESSOAS_EDITAR.replace(":codigo", codigo))
                    // }
                    >
                        <Link to={`/usuarios/${cpf}`}>
                        <EyeOutlined style={{ fontSize: '1.2rem' }} />
                        </Link>
                    </Button>

                    <Button
                        //onClick={() => alert('ok')}
                        className="action-button"
                        style={{

                            color: 'red',
                            borderRadius: 10,
                            border: 'none',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        title={`Excluir indivíduo ${cpf}`}
                    >


                        <Popconfirm
                            title="Deseja realmente deletar?"
                            onConfirm={() => { handleDeleteUser(cpf) }}
                            // onCancel={cancel}
                            okText="Sim"
                            cancelText="Não"
                        >

                            <a href="#"><DeleteOutlined style={{ fontSize: '1.2rem' }} /></a>
                        </Popconfirm>
                    </Button>
                </Space>
            ),
        },



    ];

    const handleClearAll = () => {
        setFilter({
            ativo: true,
            page: 0,
            size: OPCOES_TAMANHO_PAGINA[1],
            name: '',
            cpf: '',
            rg: ''
        });

        form.resetFields();
        formAvancado.resetFields();
    }

    const handleDeleteUser = async (cpf: string) => {
        try {
            const response = await usuariosService.delete(cpf);
            toast.success('Usuário Excluído!!');
            getUsuarios(filter);
        } catch (error) {
            console.error(error);
            toast.error('Erro ao excluir usuário!!');
        }
    }

    const onChange: TableProps<UserType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    function onFilter(filters: any) {
        setFilter({
            ...filter,
            ...filters,
            page: 0,
        })
    }

    const getUsuarios = async (filter: filterProps) => {

        try {
            setLoanding(true);
            const { data } = await usuariosService.listar(filter);
            setUsuarios(data.content);

            setPaginacao({
                currentPage: data.currentPage,
                totalElements: data.totalElements,
                size: data.size,
            });
        } catch (error) {
            console.error(error);
            toast.error('Erro ao carregar usuários!!');
        } finally {
            setLoanding(false);
        }
    }



    useEffect(() => { getUsuarios(filter) }, [filter])

    return (
        <div className="container">
            <Row justify="space-between" align="top">
                <h1>
                    <strong>Lista de Usuários</strong>
                </h1>
                <Button
                    type='primary'

                    size="middle"
                //style={{ backgroundColor: '#1890ff', color: '#fff' }}
                >
                    <Link to="/usuarios"> Adicionar</Link>
                   
                </Button>
            </Row>

            <Row gutter={[16, 16]} style={{ marginBottom: 10 }}>
                {/* {width > 768 && ( */}
                <Col span={6}>
                    <Form
                        name="pessoa_filtro"
                        layout="inline"
                        form={form}
                        onValuesChange={({ name }) => onFilter({ name })}
                        onFinish={({ name }) => name !== filter.name && onFilter({ name })}
                    >
                        <Col span={24}>
                            <Form.Item name="name">
                                <Input
                                    //prefix={<SearchOutlined />}
                                    placeholder="Busque pelo nome do usuário"
                                    allowClear
                                />
                            </Form.Item>
                        </Col>
                    </Form>
                </Col>
                {/* )} */}
                <Col>
                    <Button
                        type='primary'
                        //style={{ background: '#1890ff', color: 'white' }}
                        onClick={() => setShowFilters(true)}
                    >
                        filtros avançados
                        <FilterOutlined />

                    </Button>
                </Col>
                <Col>
                    <Button onClick={handleClearAll}>limpar filtros</Button>
                </Col>
            </Row>

            <Table rowKey={(usuario) => usuario.id} columns={columns} dataSource={usuarios} onChange={onChange} pagination={false} loading={loading}/>

            <Row justify="end" style={{ padding: 10 }}>
                <Col>
                    <Pagination
                        size="small"
                        showSizeChanger={true}
                        pageSizeOptions={OPCOES_TAMANHO_PAGINA}
                        defaultPageSize={paginacao.size}
                        total={paginacao.totalElements}
                        showTotal={() => (
                            <strong>
                                {paginacao.totalElements === 1
                                    ? `${paginacao.totalElements} usuarios no total `
                                    : `${paginacao.totalElements} usuarios no total`}
                            </strong>
                        )}
                        onChange={(page, size) => {
                            setFilter({
                                ...filter,
                                page: filter.size !== size ? 0 : page - 1,
                                size,
                            });
                        }}
                        current={paginacao.currentPage + 1}
                    />
                </Col>
            </Row>

            <Modal
                title="Selecionar filtros"
                visible={showFilters}
                onCancel={() => {
                    setShowFilters(false);
                }}
                footer={[
                    <Button
                        //style={{ backgroundColor: '#87c878', color: 'white' }}
                        type="primary"
                        key="submit"
                        onClick={() => {
                            setShowFilters(false);

                            onFilter(formAvancado.getFieldsValue());
                        }}
                    >
                        aplicar filtros
                    </Button>,
                ]}
            >
                <Form
                    name="pessoa_filtro"
                    layout="vertical"
                    form={formAvancado}
                >

                    <Collapse ghost defaultActiveKey={['1', '2', '3', '4']}>
                        <Collapse.Panel header="Dados pessoais" key="1">
                            <Col span={24}>
                                <Form.Item name="cpf" label="CPF">
                                    <Input
                                        placeholder="Busque pelo CPF"
                                        allowClear
                                    />
                                </Form.Item>
                            </Col>

                            <Col span={24}>
                                <Form.Item name="rg" label="rg">
                                    <Input placeholder="Busque pelo RG" allowClear />
                                </Form.Item>
                            </Col>


                        </Collapse.Panel>
                    </Collapse>
                </Form>
            </Modal>


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

        </div >


    );
};

export default Listagem;