import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { servicesVersion } from 'typescript';
import { usuariosService } from '../service/resources/usuariosService';

interface UserType {
  id: React.Key;
  name: string;
  cpf: string;
  rg: string;
  birthDate: Date;
  motherName: string;
  registrationDate: Date;

}

const columns: ColumnsType<UserType> = [
  {
    title: 'Nome',
    dataIndex: 'name',
    filterSearch: true,
    //onFilter: (value: string, record) => record.address.startsWith(value),
    width: '30%',
  },

  {
    title: 'CPF',
    dataIndex: 'cpf',
  },

  {
    title: 'RG',
    dataIndex: 'rg',
  },

  {
    title: 'Data de Nascimento',
    dataIndex: 'birthDate',
  },

  {
    title: 'Nome da Mãe',
    dataIndex: 'motherName',
  },

  {
    title: 'Data de Registro',
    dataIndex: 'registrationDate',
  },


];


const onChange: TableProps<UserType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const Usuarios: React.FC = () => {

  const [usuarios, setUsuarios] = useState([]);
  
  const getUsuarios = async ()=>{
    const {data} = await usuariosService.listar({});
    setUsuarios(data.content);
  }

  useEffect(()=>{getUsuarios()}, [])
  return <Table rowKey={(usuario)=>usuario.id} columns={columns} dataSource={usuarios} onChange={onChange} />


};

export default Usuarios;

