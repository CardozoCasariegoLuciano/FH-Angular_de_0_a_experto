import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Gif, GifApi } from '../interfaces/api.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagHistory: string[] = [];
  private apiKey = 'UcQag4cVl5a9WTkRs3hMN1gi0SRhJoxR';
  private baseUrl = 'https://api.giphy.com/v1/gifs';
  gifList: Gif[] = [];

  constructor(private httpService: HttpClient) {
    this.getStorage();
  }

  get tagHistory() {
    return [...this._tagHistory];
  }

  addTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeTags(tag);
    this.getFromHttp(tag);

    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  private getStorage() {
    const storage = localStorage.getItem('history');
    if (!storage) return;
    this._tagHistory = JSON.parse(storage);
    this.addTag(this._tagHistory[0])
  }

  private getFromHttp(tag: string) {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.httpService
      .get<GifApi>(`${this.baseUrl}/search`, { params: params })
      .subscribe({
        next: (resp) => {
          this.gifList = resp.data;
        },
      });
  }

  private organizeTags(tag: string) {
    tag = tag.toLowerCase();

    if (this.tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((item) => item != tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 9);
  }
}
