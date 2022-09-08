import api from "../api";

export const usuariosService = {

  async listar(paramns: any) {
    return await api.get(`/usuarios`, paramns);
  },

  async buscarByCpf(cpf: string) {
    return await api.get(`/usuarios/cpf/${cpf}`);
  },

  async create(user: any) {
    return await api.post(`/usuarios`, user);
  },

}