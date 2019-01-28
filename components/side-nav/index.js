import React from 'react';
import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon';
import Link from 'next/link';
import { loadUserData } from 'blockstack/lib/auth/authApp';

import { UserGroup } from 'radiks';
import {
  Container, Item, Label, Divider,
} from './styled';
import { friendlyId } from '../../lib/utils';


export default class extends React.Component {
  state = {
    blogs: [],
    open: false,
  }

  async componentDidMount() {
    if (loadUserData()) {
      const blogs = await UserGroup.myGroups();
      this.setState({ blogs });
    }
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
          <Link
            prefetch
            href={{
              pathname: '/blogs/show',
              query: {
                id: friendlyId(blog),
              },
              as: `/blogs/${friendlyId(blog)}`,
            }}
          >
            <a>View all Posts</a>
          </Link>
        </Item>
        <Item>
          <Link href={`/blogs/${friendlyId(blog)}/edit`}>
            <a>Edit Blog Details</a>
          </Link>
        </Item>
        <Item>
          <Link href={`/blogs/${friendlyId(blog)}/posts/new`}>
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
        <Label>
          <CloseCircleOutlineIcon onClick={() => this.toggle()} />
        </Label>
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
