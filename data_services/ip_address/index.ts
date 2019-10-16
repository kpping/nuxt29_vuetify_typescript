import { KyInstance } from '~/helpers/ky';

export function getIpAddress(client: KyInstance) {
    return () => client.get('https://icanhazip.com').text();
}
