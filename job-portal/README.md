# React + Vite

This template provides a minimal setup to get React working in Vite - npm create vite@latest

# Installing shardCn which is build on top of tailwind css

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
then other step present in thi link - https://ui.shadcn.com/docs/installation/vite
```

# Installing the shadcn component

```
npx shadcn@latest add accordion carousel card drawer input label radio-group select textarea button
```

# Setting up SupaBase database

```
1 . login into supabase application with git credential -https://supabase.com/
2 . click on oragnization
3 . provide the details name org , personal , o$ / month
4 . Now click on connect
5 . select App Framework
6 . click on react - vite
7 . it will give the data add that into .env file
8 . create the .env file , supabase.js file ,
```

# Cleark authetication setup

```
1 . Go to the link https://clerk.com/
2 . sign in with github
3 . then run this command in code - npm install @clerk/clerk-react
4 . add something in env file
5 . to config the cleark we need to do some changes in the main.jsx / main.tsx (cleark provider need to add)
6 . now signin,signout code
7 . to change the theme we need to install one more npm package npm install @clerk/themes
8 . add this inside the main.jsx/tsx inside clearkprovider as apperance/basetheme
```
