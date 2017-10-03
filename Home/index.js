import React from 'react';
import Layout from '../Layout'
import Head from "react-helmet";
import Link from "../Link";
import { PostBox, BoxContainer } from './Wrappers';


const Home = ({ isLoading, posts }) => (
  <Layout>
    <Head>
      <title>Benjamin Shafii</title>
      <meta name="description" content="Everything is awesome!" />
    </Head>
    <h2>What should you expect?</h2>
    <p>
      Maybe I should start with an introduction about what this blog is going to be about.
      The truth is: I don't know yet. I need a place to summarize and organize my thoughts and putting it on the Interweb seems to be where all the cool kids do it.

      (I want to be a cool kid too)
    </p>
      <h2>Last Posts</h2>

    {isLoading && "Loading..."}
    {!isLoading && (
      <BoxContainer>
        {posts &&
            posts.node &&
            posts.node.list &&
            posts.node.list.map(post => (
              <Link key={post.id} to={`/blog/${post.id}/`}>
                <PostBox>
                  {post.title || post.id}
                </PostBox>
              </Link>
            ))}
          </BoxContainer>
    )}
    <div>
      {posts.node &&
          posts.node.hasPreviousPage && (
            <Link
              to={
                posts.node.previousPageIsFirst ? (
                  `/`
                ) : (
                  `/after/${posts.node.previous}/`
                )
              }
            >
              Newer posts
            </Link>
          )}{" "}
          {posts.node &&
              posts.node.hasNextPage && (
                <Link to={`/after/${posts.node.next}/`}>Older posts</Link>
              )}
            </div>
          </Layout>
);

export default Home;
