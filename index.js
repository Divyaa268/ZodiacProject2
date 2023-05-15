const name = document.getElementById("name");

const tagsContaoner = document.querySelector(".tags");

const addName = () =>
{
    if(name.value === "")
    {
        return null;
    }
    const tag = document.createElement("div");
    tag.setAttribute("class", "tag");

    tag.innerText = `Hey, I am ${name.value} !`;

    tagsContaoner.append(tag);
}