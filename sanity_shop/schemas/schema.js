import createScema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import product from './product'
import banner from './banner'

export default createScema({
    name: 'default',
    types: schemaTypes.concat([ product, banner ]),
})