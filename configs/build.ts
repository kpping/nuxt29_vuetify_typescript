import { Configuration } from '@nuxt/types';
import { Options as SassOptions } from 'node-sass';

const ScssSass = (style: 'scss' | 'sass'): SassOptions => ({
    implementation: require('sass'),
    sassOptions: {
        fiber: require('fibers'),
        indentedSyntax: style === 'sass',
    },
});

const build: Configuration['build'] = {
    loaders: {
        scss: ScssSass('scss'),
        sass: ScssSass('sass'),
    },
    extractCSS: true,
};

export default build;
