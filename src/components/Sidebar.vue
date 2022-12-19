<template>
  <div class="row">
  <div class="col-2">
    <div class="list-group" id="list-tab" role="tablist">
      <button @click="setActive(1)" :class="showNumber==1?'active':''" class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" role="tab" aria-controls="home">Home</button>
      <button @click="setActive(2)" :class="showNumber==2?'active':''" class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"  role="tab" aria-controls="profile">Profile</button>
      <button @click="setActive(3)" :class="showNumber==3?'active':''" class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list"  role="tab" aria-controls="messages">Messages</button>
      <button @click="setActive(4)" :class="showNumber==4?'active':''" class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"  role="tab" aria-controls="settings">Settings</button>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div :class="showNumber==1?'show active':''" class="tab-pane fade show" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aperiam rerum totam, facilis magnam, odit magni at earum assumenda non, iste provident nulla. Nesciunt nam ipsa, corporis sunt tempora modi.</div>
      <div :class="showNumber==2?'show active':''" class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi dolores asperiores, expedita ratione cumque dolorum ducimus pariatur eveniet. Aperiam repellat officiis neque eos odit fugit facilis similique earum explicabo?</div>
      <div  :class="showNumber==3?'show active':''" class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam numquam laboriosam autem consequatur modi fuga quod dolor velit ipsam unde magni, deleniti rerum doloribus quam possimus perspiciatis officia natus?</div>
      <div :class="showNumber==4?'show active':''" class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis necessitatibus alias ad quasi, magni magnam illum distinctio dolore dicta quam qui quia non consequuntur modi rerum praesentium nam possimus eum.</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name:"Sidebar",
 data: () => {
    return {
      showNumber: 1,
    };
  },
  methods: {
   
   setActive(number){
      this.showNumber= number;
    }
  },
}
</script>

<style>

</style>