# LMS SYSTEM

### Setup Instructions

1. clone the project 
``` 
     git clone  https://github.com/MdAjbullah/LMS-SYSTEM.git   
```


2. move into the directory
```
    cd lms-system
```

3. install the dependencies
```
    npm install
```

4. run the server


```
    run run  dev 
```




### setup instructions for tailwind


   [Official instructions](https://tailwindcss.com/docs/guides/vite)



   1. insatall tailwind css

   ```
      npm install -D tailwindcss postcss autoprefixer
   ``` 

   2. create tailwind configuration file 
   ```
     npx tailwindcss init -p
   ```
   3. add file  extension to tailwind  config file in contents  property

   ```
     "./src/**/*.{html,js,ts,jsx,tsx}",
   ```







 4. Add the Tailwind directives at the topp of the index.CSS
 ```
          @tailwind base;
          @tailwind components;
          @tailwind utilities;
 ```
   
    



