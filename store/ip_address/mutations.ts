import { MutationTree } from 'vuex';
import { IpAddressState } from './types';

export const mutations: MutationTree<IpAddressState> = {
    UPDATE_IP_ADDRESS(state, newValue) {
        state.value = newValue;
    },
};

export default mutations;
