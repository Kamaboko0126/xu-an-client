<template>
  <div class="container">
    <div class="row">
      <div>
        <div class="title">使用者資訊</div>
        <div class="edit-container">
          <router-link to="/edit">
            <div class="edit">編輯</div>
          </router-link>
        </div>
        <div class="name-container">
          <input
            type="text"
            class="name"
            v-model="inputFirstName"
            placeholder="First Name"
            readonly
          />
          <input
            type="text"
            class="name"
            v-model="inputLastName"
            placeholder="Last Name"
            readonly
          />
        </div>
        <input
          type="text"
          class="email"
          v-model="inputEmail"
          placeholder="Email"
          readonly
        />
        <div class="edit-container">
          <router-link to="/change">
            <div class="edit" @click="edit">更改密碼</div>
          </router-link>
        </div>
        <input
          type="password"
          class="password"
          v-model="inputPassword"
          placeholder="Password: at least 6 characters"
          readonly
        />
        <div class="button-container">
          <button @click="logout">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>
