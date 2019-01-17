import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';
import { Board } from '../../boards/models/board';

@Injectable()
export class BoardsService {
    constructor(
        private apiService: ApiService
    ) { }

    getBoards(): Observable<Board[]> {
        const url = '/boards';
        return this.apiService.get(url);
    }

    createBoard(board: Board) {
        const url = '/boards';
        this.apiService.post(url, board).subscribe(
            res => alert('Create random Board successfully. Please click Get Boards to see...')
        );
    }

    updateBoard(board: Board) {
        const url = '/boards/' + board._id;
        this.apiService.put(url, board).subscribe();
    }

    deleteBoard(id: string) {
        const url = '/boards/' + id;
        this.apiService.delete(url).subscribe();
    }
}
