import {Container, inject} from 'inversify';
import BooksRepository from './models/BooksRepository'

var container = new Container();
container.bind(BooksRepository).toSelf()