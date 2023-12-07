import path from "path";
import { productList } from "../data/productList.js";
import { getProductByCode } from "../service/getPorductByCode.js";

const viewsPath = path.resolve() + "/src/views/admin";

export class adminController {
    constructor() {}

    adminGet(req, res) {
        const { filteredProductList, searchInput, noResults } = req;

        res.render(path.join(viewsPath, "admin.ejs"), {
            productList: filteredProductList || productList,
            searchInput: searchInput,
            noResults: noResults,
        });
    }


    adminCreateGet(req, res) {
        res.render(path.join(viewsPath, "create.ejs"), {});
    }

    adminCreatePost(req, res) {
        res.send("Route for create with POST in Admin View");
    }

    adminEditIdGet(req, res) {
        const productCode = req.params.code;
        const product = getProductByCode(productCode);

        res.render(path.join(viewsPath, "edit.ejs"), {
            productList,
            productCode,
            product,
            name: product ? product.name : "",
            collection: product ? product.collection : "",
            
        });
    }
    
    adminEditIdPut(req, res) {
        res.send("Route for edit/:id put");
    }

    adminEditIdDelete(req, res) {
        res.send("Route for edit/:id delete");
    }
}
