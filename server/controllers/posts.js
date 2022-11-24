const express = require("express");
const mongoose = require("mongoose");
const Blog = require("../modal/blogSchema");
const Comment = require("../modal/commentSchema");

//GET ALL POST

const getAllPost = async (req, res) => {
  try {
    const posts = await Blog.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: err.message });
  }

  //res.send("Get all posts");
};

//GET SPECIFIC POST

const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Blog.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  //res.send("Get specific post");
};

//CREATE

const createPost = async (req, res) => {
  const newPost = req.body;
  const post = new Blog({
    title: newPost.title,
    author: newPost.author,
    desc: newPost.desc,
    shortDesc: newPost.shortDesc,
    image: newPost.image,
  });
  try {
    const postDataToSave = await post.save();
    res.status(200).json(postDataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  // console.log(post);
  // res.json(post);
};

//DELETE

const deletePost = async (req, res) => {
  const { id } = req.params;
  //await Blog.deleteMany();
  try {
    await Blog.findByIdAndDelete(id);
    res.status(200).json("Deleted!!!");
    // console.log("Deleted succesfully");
  } catch (err) {
    console.log(err);
  }
};

// UPDATE

const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  try {
    const posts = await Blog.findByIdAndUpdate(id, { ...post });

    res.status(200).json("Post Updated!!");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  //  res.send("update the post");
};

//COMMENTS

const createComment = async (req, res) => {
  const cmnt = req.body;

  const newComment = new Comment({
    commentId: cmnt.id,
    author: cmnt.author,
    comment: cmnt.comment,
  });
  try {
    const commented = await newComment.save();
    res.status(200).json(commented);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllComments = async (req, res) => {
  try {
    const allComments = await Comment.find();
    res.status(200).json(allComments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllPost,
  getPost,
  createPost,
  deletePost,
  updatePost,
  createComment,
  getAllComments,
};
