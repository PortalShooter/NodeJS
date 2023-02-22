import {Schema, model} from 'mongoose';

interface IBook {
    id: string;
    title: string;
    description?: string;
    authors: string;
    favorite?: string;
    fileCover?: string;
    fileName?: string;
}

const bookSchema = new Schema<IBook>({
    id: {
        type: 'string',
        required: true,
    },
    title: {
        type: 'string',
        required: true,
    },
    description: {
        type: 'string',
        default: '',
    },
    authors: {
        type: 'string',
        required: true,
    },
    favorite: {
        type: 'string',
        default: '',
    },
    fileCover: {
        type: 'string',
        default: '',
    },
    fileName: {
        type: 'string',
        default: '',
    },
});

module.exports = model<IBook>('Book', bookSchema);