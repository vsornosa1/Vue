<template>
  <div>
    <!-- EG: <TheHeader />  is also an option-->
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')"> Active goals </button>
    <button @click="setSelectedComponent('manage-goals')"> Manage goals </button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->

    <!-- After changing tabs, the input state in the unactive tab is kept! -->
    <keep-alive> 
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>  
// Local imports
import TheHeader from './components/layout/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  // Local component registration!
  components: { 
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Vicent Sornosa',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>