import Real from 'realm';

//TABELAS

export const METAS_SCHEMA = 'Metas';
export const ITEM_META_SCHEMA = 'Item_Meta';

//DEFINIÇÕES DE MODELOS

export const Item_Meta_Schema = {
    name: ITEM_META_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',
        nome: { type: 'string', indexed: true },
        feito: { type: 'bool' , indexed: false },
    }
};

export const Meta_Schema = {
    name: METAS_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',
        dataCriacao: 'date',
        metas: { type: 'list', objectType: 'ITEM_META_SCHEMA' }
    }
};

//OPCOES DO BANCO DE DADOS

const databaseOptions = {
    path: 'database.realm',
    schema: [ Item_Meta_Schema, Meta_Schema ],
    schemaVersion: 0, 
};

//FUNCOES


//EXPORTANDO O BANCO DE DADOS
export default new Realm(databaseOptions);