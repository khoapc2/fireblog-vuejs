<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
export default {
  name: "Home",
  components: { BlogPost },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all thing programming including HTML, CSS, Javascript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },

      sampleBlogPost: [
        {
          title: "This is a Filter Title",
          blogHTML: "This is a filter blog post title!",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a Filter Title",
          blogHTML: "This is a filter blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>
