// PUT /blogs/:blogId
// Updates a blog by changing the its title, body, adding tags, adding a subcategory.
//  (Assuming tag and subcategory received in body is need to be added)
// Updates a blog by changing its publish status i.e. adds publishedAt date and set published to true
// Check if the blogId exists (must have isDeleted false). If it doesn't, return an HTTP status 404
//  with a response body like this
// Return an HTTP status 200 if updated successfully with a body like this
// Also make sure in the response you return the updated blog document.

const mongoose = require("mongoose");
const blogModel = require("./models/blogModel");


const updateBlog = async function (req, res) {

    try {
        const blogId = req.params.blogId
        const bodyValues = req.body

        const { title, body, tags, subcategory } = bodyValues

        if (!mongoose.isValidObjectId(blogId))
            return res.status(400).send({ status: false, message: "Please provide valid blogId" });

        const isBlogExists = await blogModel.findById(blogId)
        if (!isBlogExists)
            return res.status(404).send({ status: false, message: "blog not found" });

        if (Object.keys(bodyValues).length == 0)
            return res.status(400).send({ status: false, message: "Please provide some data to update blog" })

        if (!(title || body || tags || subcategory))
            return res.status(400).send({ status: false, message: "Plese provide valid queries to update blog(title/body/tags/subcategory)" })

        const updatedBlog = await blogModel.findOneAndDelete({_id : blogId, isDeleted : false},
            {
                $set: { title: title, body: body, isPublished: true, publishedAt: Date.now() },
                $push: { tags: tags, subcategory: subcategory }
            },
            { new: true }
        );

        if (!updateBlog)
            return res.status.send({ status: false, message: "No blog found to update" })

        return res.status(200).status({ status: true, data: updatedBlog })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}