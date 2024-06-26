import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { postService } from "../posts.service"; 

@Component({
    selector: 'app-post-list',
    templateUrl: "./post-list.component.html",
    styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy{
    posts: Post[] = [];
    private postsSub!: Subscription;

    constructor(public postService: postService){}
    ngOnInit(): void {
        this.posts = this.postService.getPosts();
        this.postsSub = this.postService
        .getPostUpdateListener()
        .subscribe((posts: Post[]) => {
            this.posts = posts;
        })
    }

    ngOnDestroy() {
        this.postsSub.unsubscribe();
    }
    // @Input() posts: {title: string, content: string}[] = [];
}