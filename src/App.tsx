import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Formulario from './components/Formulario';
import Listagem from './components/Listagem';
import Usuarios from './components/Usuarios';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => (
  <Layout className="layout" >
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={[
          
          {
            key: "Cadastro",
            label: <Link to="/usuarios">Cadastro</Link>
          },

          {
            key: "Listagem",
            label: <Link to="/listagem">Listagem de usuários</Link>
          }
        ]

        }

      />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Routes>
        <Route path="/" element={<Usuarios />} />

        <Route path="/listagem" element={<Listagem />} />

        <Route path="/usuarios">
          <Route path=":cpf" element={<Formulario />} />

          <Route path="" element={<Formulario />} />
        </Route>

      </Routes>

    </Content>

  </Layout>

);

export default App;