import DB from "../database/database.js";

console.log("controller")
class Controllers {
    static create_post = (req, res) => {
        res.render("create-post");
    };

    static post_list = async (req, res, next) => {
        try {
            const [row] = await DB.query("SELECT * FROM `books`");
            res.render("post-list", {
                posts: row,
            });
        } catch (e) {
            next(e);
        }
    };

    static insert_post = async (req, res, next) => {
        if (res.locals.validationError !== undefined) {
            return res.render("create-post", {
                validationErrors: JSON.stringify(
                    res.locals.validationError.errors
                ),
                body: req.body,
            });
        }
        const { title, content, author } = req.body;
        try {
            await DB.execute(
                "INSERT INTO `books` (`title`,`content`,`author`) VALUES (?,?,?)",
                [title, content, author]
            );
            res.redirect("/");
        } catch (e) {
            next(e);
        }
    };

    static edit_post = async (req, res, next) => {
        if (res.locals.validationError !== undefined) {
            return res.redirect("/");
        }
        try {
            const [row] = await DB.query("SELECT * FROM `books` WHERE `id`=?", [
                req.params.id,
            ]);
            if (Object.keys(row).length === 0) {
                return res.redirect("/");
            }
            res.render("edit-post", {
                post: Object.values(row)[0],
            });
        } catch (e) {
            next(e);
        }
    };

    static update_post = async (req, res, next) => {
        if (isNaN(+req.params.id)) {
            return res.redirect("/");
        }
        try {
            const [row] = await DB.execute(
                "SELECT * FROM `books` WHERE `id`=?",
                [req.params.id]
            );
            if (Object.keys(row).length === 0) {
                return res.redirect("/");
            }
            if (res.locals.validationError !== undefined) {
                return res.render("edit-post", {
                    validationErrors: JSON.stringify(
                        res.locals.validationError.errors
                    ),
                    body: req.body,
                    post: Object.values(row)[0],
                });
            }
            const date = new Date().toISOString();
            const { title, content, author } = req.body;
            await DB.execute(
                "UPDATE `books` SET `title`=?, `content`=?,`author`=?, `updated_at`=? WHERE `id`=?",
                [title, content, author, date, req.params.id]
            );
            res.render("edit-post", {
                body: req.body,
                updated: 1,
            });
        } catch (e) {
            next(e);
        }
    };

    static delete_post = async (req, res, next) => {
        if (isNaN(+req.params.id)) {
            return res.redirect("/");
        }
        await DB.execute("DELETE FROM `books` WHERE `id`=?", [req.params.id]);
        return res.redirect("/");
    };

    static single_post = async (req, res, next) => {
        if (isNaN(+req.params.id)) {
            return res.redirect("/");
        }
        try {
            const [row] = await DB.query("SELECT * FROM `books` WHERE `id`=?", [
                req.params.id,
            ]);
            if (Object.keys(row).length === 0) {
                return res.redirect("/");
            }
            res.render("view", {
                post: Object.values(row)[0],
            });
        } catch (e) {
            next(e);
        }
    };
}

export default Controllers;

