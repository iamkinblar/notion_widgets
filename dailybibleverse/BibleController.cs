using System;
using System.Web.Http;
using BibleIndexerV2;

public class BibleController : ApiController
{
    [HttpGet]
    public IHttpActionResult GenerateRandomBibleVerse()
    {
        string verse = BibleService.GenerateRandomBibleVerse();
        return Ok(verse);
    }
}
