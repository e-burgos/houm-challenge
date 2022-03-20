
import { useQuery } from 'react-query';
import { axiosClientInstance } from 'utils/api';
import { _storage } from 'utils/functions';

export function useGlobalQuery<TypeResponse>(keys: string[], url: string, cacheTime?: number) {
    const configCache = cacheTime ? cacheTime : 0;

    return useQuery<TypeResponse>(
        keys,
        () =>
            axiosClientInstance({
                url,
            }).then((res) => res.data),
        {
            cacheTime: configCache,
            onSuccess: (data) => {
                _storage.set('houm.' + url, { ...data, updatedAt: Date.now() });
            },
            initialData: () => {
                const state = _storage.get('houm.' + url);
                if (state && Date.now() - state.updatedAt <= configCache) {
                    return state;
                }
            },
        },
    );
}
