import { Button, Col, Collapse, Form, Input, Modal, Pagination, Radio, Row, Select, Table } from 'antd';
import '../App.css';

const Listagem = ({ }) => {
    return (
        <div className="container">
            <Row justify="space-between" align="top">
                <h1>
                    <strong>Lista de Usuários</strong>
                </h1>
                <Button
                    size="middle"
                    style={{ backgroundColor: '#87c878', color: '#fff' }}
                >
                    Adicionar
                </Button>
            </Row>

            <Row gutter={[16, 16]} style={{ marginBottom: 10 }}>
                {/* {width > 768 && ( */}
                <Col span={6}>
                    <Form
                        name="pessoa_filtro"
                        layout="inline"
                    //form={form}
                    //onValuesChange={({ nome }) => onFilter({ nome })}
                    //onFinish={({ nome }) => nome !== filter.nome && onFilter({ nome })}
                    >
                        <Col span={24}>
                            <Form.Item name="nome">
                                <Input
                                    //prefix={<SearchOutlined />}
                                    placeholder="Busque pelo nome do município"
                                    allowClear
                                />
                            </Form.Item>
                        </Col>
                    </Form>
                </Col>
                {/* )} */}
                <Col>
                    <Button
                        style={{ background: '#87c878', color: 'white' }}
                    //onClick={() => setShowFilters(true)}
                    >
                        filtros avançados

                    </Button>
                </Col>
                <Col>
                    <Button >limpar filtros</Button>
                </Col>
                {/* {width > 768 && ( */}
                <Col>
                    <Radio.Group
                    // defaultValue={isTableView}
                    // onChange={({ target: { value } }) => setIsTableView(value)}
                    >
                        <Radio.Button value={true}>

                        </Radio.Button>
                        <Radio.Button value={false}>

                        </Radio.Button>
                    </Radio.Group>
                </Col>
                {/* )} */}
            </Row>


            <Table
                rowKey={({ id }) => id}
                scroll={{ y: 600 }}
                //columns={columns}
                //dataSource={municipios}
                pagination={false}
            />
            <Row justify="end" style={{ padding: 10 }}>
                <Col>
                    <Pagination
                        size="small"
                        showSizeChanger={true}
                    // simple={width < 768}
                    //pageSizeOptions={OPCOES_TAMANHO_PAGINA}
                    //defaultPageSize={paginacao.size}
                    //total={paginacao.totalElements}
                    //</Col>showTotal={() => (
                    //  <strong>
                    //    {paginacao.totalElements === 1
                    //      ? `${paginacao.totalElements} municipio no total `
                    //    : `${paginacao.totalElements} municipios no total`}
                    //</strong>
                    // )}
                    //onChange={(page, size) => {
                    //  setFilter({
                    //    ...filter,
                    //  page: filter.size !== size ? 0 : page - 1,
                    //size,
                    // });
                    // }}
                    //current={paginacao.currentPage + 1}
                    />
                </Col>
            </Row>

            <Modal

                title="Selecionar filtros"
                //visible={showFilters}
                onCancel={() => {
                  //  setShowFilters(false);
                }}
                footer={[
                    <Button
                        style={{ backgroundColor: '#87c878', color: 'white' }}
                        key="submit"
                        onClick={() => {
                           // setShowFilters(false);
                           // onFilter(formAvancado.getFieldsValue());
                        }}
                    >
                        aplicar filtros
                    </Button>,
                ]}
            >
                <Form name="pessoa_filtro" layout="vertical" >
                    <Collapse ghost defaultActiveKey={['1', '2', '3', '4']}>
                        <Collapse.Panel header="Dados pessoais" key="1">
                            <Col span={24}>
                                <Form.Item name="nome" label="nome">
                                    <Input
                                        placeholder="Busque pelo nome do município"
                                        allowClear
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                {/* <Form.Item name="status" label="status"> */}
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        (option!.children as unknown as string).includes(input)
                                    }
                                    filterSort={(optionA, optionB) =>
                                        (optionA!.children as unknown as string)
                                            .toLowerCase()
                                            .localeCompare(
                                                (optionB!.children as unknown as string).toLowerCase()
                                            )
                                    }
                                >
                                    <Select.Option value="1">Not Identified</Select.Option>
                                    <Select.Option value="2">Closed</Select.Option>
                                    <Select.Option value="3">Communicated</Select.Option>
                                    <Select.Option value="4">Identified</Select.Option>
                                    <Select.Option value="5">Resolved</Select.Option>
                                    <Select.Option value="6">Cancelled</Select.Option>
                                </Select>

                                {/* </Form.Item> */}
                            </Col>
                            <Col span={24}>
                                <Form.Item name="microRegiaoDescricao" label="microRegião">
                                    <Input placeholder="Busque pelo micro região" allowClear />
                                </Form.Item>
                            </Col>
                        </Collapse.Panel>
                        <Collapse.Panel header="Endereço" key="2">
                            <Col span={24}>
                                <Form.Item name="enderecoLogradouro" label="logradouro">
                                    <Input
                                        placeholder="Busque pelo logradouro da pessoa"
                                        allowClear
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item name="bairroNome" label="bairro">
                                    <Input
                                        placeholder="Busque pelo bairro da pessoa"
                                        allowClear
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item name="municipioNome" label="cidade">
                                    <Input
                                        placeholder="Busque pela cidade da pessoa"
                                        allowClear
                                    />
                                </Form.Item>
                            </Col>
                        </Collapse.Panel>
                    </Collapse>
                </Form>
            </Modal>

        </div>


    );
};

export default Listagem;