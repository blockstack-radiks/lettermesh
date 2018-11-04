import React from 'react';
import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon';
import Link from 'next/link';

import { UserGroup } from 'radiks';
import {
  Container, Item, Label, Divider,
} from './styled';


export default class extends React.Component {
  state = {
    blogs: [],
    open: false,
  }

  async componentDidMount() {
    const blogs = await UserGroup.myGroups();
    console.log(blogs);
    this.setState({ blogs });
  }

  toggle() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  blogs() {
    return this.state.blogs.map(blog => (
      <div key={blog._id}>
        <Divider />
        <Label>{blog.attrs.name}</Label>
        <Item>
          <Link href={`/blogs/${blog._id}`}>
            <a>View all Posts</a>
          </Link>
        </Item>
        <Item>
          <Link href={`/blogs/${blog._id}/posts/new`}>
            <a>Write a New Post</a>
          </Link>
        </Item>
      </div>
    ));
  }

  render() {
    const { open } = this.state;
    return (
      <Container open={open}>
        <Item hover={false}>
          <CloseCircleOutlineIcon onClick={() => this.toggle()} />
        </Item>
        {/* <Item>
          <Link href="/blogs">
            <a>Your Blogs</a>
          </Link>
        </Item> */}
        <Item>
          <Link href="/blogs/new">
            <a>Create a new Blog</a>
          </Link>
        </Item>
        {this.blogs()}
      </Container>
    );
  }
}
