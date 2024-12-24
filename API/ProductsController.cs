
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


namespace API.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        public StoreContext Context { get; }
        public ProductsController(StoreContext context)
        {
            this.Context = context;
        }


        [HttpGet]
        public ActionResult GetProducts()
        {
            var products = Context.Product.ToList();
            return Ok(products);
        }


        [HttpGet("{id}")]
        public ActionResult<Product> GetProducts(int id)
        {
            var products = Context.Product.Find(id);
            return Ok(products);
        }
    }
}

