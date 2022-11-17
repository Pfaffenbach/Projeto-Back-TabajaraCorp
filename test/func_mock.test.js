const { FuncModel } = require('../src/infrastructure/database');
const func = require('../src/port/func_repository');

describe('create', () => {
    it('Valid Func', async () => {
        FuncModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                nome: "João",
                email: "joao@inatel.br",
                senha: "123456789",
            }),
        }));

        expect(await func.create({
            id: 1,
            nome: "João",
            email: "joao@inatel.br",
            senha: "123456789"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nome: expect.any(String),
                email: expect.any(String),
                senha: expect.any(String),
            }),
        );
    });
});

describe('editFunc', () => {
    it('Valid edit', async () => {
        FuncModel.findOneAndUpdate = jest.fn().mockImplementation(() => ({
            exec: () => ({
                toObject: () => ({
                    id: 1,
                    senha: '123Maria',
                    email: 'jao10@email.com',
                    nome: 'Maria João',
                }),
            }),
        }));

        expect(await func.update({
            email: 'jao10@email.com',
            nome: 'Maria João',
        })).toEqual(
            expect.objectContaining({
                email: expect.any(String),
                nome: expect.any(String),
                senha: expect.any(String),
                id: expect.any(Number),
            }),
        );
    });
});

describe('listFunc', () => {
    it('Valid list', async () => {
        FuncModel.find = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
                email: 'cardozo10@email.com',
                nome: 'André Cardozo',
                senha: 'teste1234',
            }),
        }));

        expect(await func.list()).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                email: 'cardozo10@email.com',
                nome: 'André Cardozo',
                senha: 'teste1234',
            }),
        );

    });
});

describe('getByEmail', () => {
    it('Valid list', async () => {
        FuncModel.findOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
                email: 'cardozo10@email.com',
                nome: 'André Cardozo',
                senha: 'teste1234',
            }),
        }));

        expect(await func.getByEmail({
            email: 'cardozo10@email.com'
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                email: 'cardozo10@email.com',
                nome: 'André Cardozo',
                senha: 'teste1234',
            }),
        );

    });
});

describe('deleteFunc', () => {
    it('Valid delete', async () => {
        FuncModel.deleteOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                deletedCount: 1,
            }),
        }));

        expect(await func.delete({
            email: 'jao10@email.com',
        })).toEqual(1);
    });
});