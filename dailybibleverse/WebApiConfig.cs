using System.Web.Http;

public static class WebApiConfig
{
    public static void Register(HttpConfiguration config)
    {
        // Configure your routes here
        config.Routes.MapHttpRoute(
            name: "BibleApi",
            routeTemplate: "api/bible/random-verse",
            defaults: new { controller = "Bible", action = "GenerateRandomBibleVerse" }
        );
    }
}
