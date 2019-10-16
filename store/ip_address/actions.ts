import { ActionContext, ActionTree } from 'vuex/types';
import { IpAddressState } from './types';
import { getIpAddress } from '~/data_services/ip_address';
import { clientNoPrefixUrl } from '~/helpers/ky';

interface IpAddresssActionContext extends ActionContext<IpAddressState, IpAddressState> {}

export const actions: ActionTree<IpAddressState, IpAddressState> = {
    async getIpAddress({ commit }: IpAddresssActionContext) {
        commit('UPDATE_IP_ADDRESS', await getIpAddress(clientNoPrefixUrl)());
    },
};

export default actions;
