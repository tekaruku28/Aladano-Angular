import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../post/post.model';

@Injectable({
    providedIn: 'root',
})

export class postService{
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    getPosts(){
        return [...this.posts];
    }

    getPostUpdateListener(){
       return this.postsUpdated.asObservable(); 
    }

    addPost(title: string, content: string){
        const post: Post = { title: title, content: content };
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
    }

}