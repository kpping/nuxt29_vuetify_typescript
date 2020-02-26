import { getIpAddress } from './index';
import { KyInstance } from '~/helpers/ky';

it('should call get and resolve `some_address`', async () => {
    const mocTextFx = jest.fn();
    mocTextFx.mockResolvedValueOnce('some_address');

    const mockGetFx = jest.fn();
    mockGetFx.mockReturnValueOnce({ text: mocTextFx });

    const mockedClient = ({ get: mockGetFx } as unknown) as KyInstance;

    const result = await getIpAddress(mockedClient)();

    expect(mockGetFx).toBeCalledTimes(1);
    expect(mockGetFx).toBeCalledWith('https://icanhazip.com');
    expect(mocTextFx).toBeCalledTimes(1);

    expect(result).toBe('some_address');
});
