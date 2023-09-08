     function darkTheme() {
        let body = document.querySelector("body");
        //body.classList.toggle ("dark");

        if (body.classList.contains("dark")) {
          body.classList.remove("dark");
        } else {
          body.classList.add("dark");
        }
      }

      let changeThemeButton = document.querySelector(".change-theme");
      changeThemeButton.addEventListener("click", darkTheme);