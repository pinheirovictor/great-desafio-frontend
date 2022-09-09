import { Layout, Menu } from 'antd';
import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Formulario from './components/Formulario';
import Listagem from './components/Listagem';

const { Header, Content } = Layout;

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
            label: <Link to="/cadastro">Cadastro de usuários</Link>
          },

          {
            key: "Listagem",
            label: <Link to="/">Listagem de usuários</Link>
          }
        ]

        }

      />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Routes>
        <Route path="/" element={<Listagem />} />
        <Route path="/listagem" element={<Listagem />} />
        <Route path="/cadastro">
          <Route path=":cpf" element={<Formulario />} />
          <Route path="" element={<Formulario />} />
        </Route>
      </Routes>
    </Content>
  </Layout>

);

export default App;