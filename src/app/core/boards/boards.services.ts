import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';
import { Board } from '../../boards/models/board';

@Injectable()
export class BoardsService {
    constructor(
        private apiService: ApiService
    ) { }

    getBoards(): Observable<Board> {
        const url = '/boards';
        return this.apiService.get(url);
    }
}
