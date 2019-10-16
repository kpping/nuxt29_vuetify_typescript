import ky from 'ky-universal';

export type KyInstance = typeof ky;

export const client: KyInstance = ky.create({
    prefixUrl: process.env.APP_API_URL,

    retry: {
        limit: 3,
        statusCodes: [408, 413, 429, 502, 503, 504],
    },
});

export const clientNoPrefixUrl: KyInstance = client.extend({
    prefixUrl: undefined,
});

export const clientNoRetry: KyInstance = client.extend({
    retry: undefined,
});
