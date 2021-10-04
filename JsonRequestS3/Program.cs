using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;

namespace SystemJsonText
{
    class Program
    {
        static void Main(string[] args)
        {         
            using (StreamReader r = new StreamReader("goodInputJson.json"))
            {
                string json = r.ReadToEnd();
                JsonSerializerOptions jsonSerializerOptions = new JsonSerializerOptions()
                {
                    PropertyNameCaseInsensitive = true
                };

                jsonSerializerOptions.Converters.Add(new UniversalDateTimeConverter());

                //Convert the parent json
                TestObject testObject = JsonSerializer.Deserialize<TestObject>(json, jsonSerializerOptions);

                // Convert the child Json 
                JsonSerializerOptions jsonSerializerOptionsOrderHistory = new JsonSerializerOptions()
                {
                    PropertyNameCaseInsensitive = true,
                    Converters = { new ListProductConverter(), new UniversalDateTimeConverter() }
                };
                OrderHistory orderHistory = JsonSerializer.Deserialize<OrderHistory>(testObject.QualificationParameter, jsonSerializerOptionsOrderHistory);
            }            
        }
    }

    class TestObject
    {
        public string QualificationParameter { get; set; }
        public string QualificationType { get; set; }
    }

    class OrderHistory
    {
        public DateTime DateSpanStart { get; set; }
        public DateTime DateSpanEnd { get; set; }
        public DateTime PromoStartDate { get; set; }     
        public Products Products { get; set; }
    }

    class Products
    {
        public List<ProductItem> ProductItem { get; set; }
    }

    class ProductItem
    {
        public string Sku { get; set; }

        public string Quantity { get; set; }
    }

    #region Json Converter

    class UniversalDateTimeConverter : JsonConverter<DateTime>
    {
        public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            if (reader.TokenType != JsonTokenType.String)
            {
                throw new JsonException($"Expected {nameof(JsonTokenType.String)} but received {reader.TokenType}");
            }
            return DateTime.Parse(reader.GetString());
        }

        public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
        {
            writer.WriteStringValue(value.ToUniversalTime());
        }
    }

    // When it tries to convert products, this will kick in
    class ListProductConverter : JsonConverter<Products>
    {
        public override Products Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            using (JsonDocument doc = JsonDocument.ParseValue(ref reader))
            {
                JsonElement root = doc.RootElement;

                Products productItems = new Products { ProductItem = new List<ProductItem>() };
                root = root.GetProperty("ProductItem");
                Enumerate(root);

                void Enumerate(JsonElement element)
                {
                    if (element.ValueKind == JsonValueKind.Object)
                    {
                        productItems.ProductItem.Add(JsonSerializer.Deserialize<ProductItem>(element.GetRawText(), options));
                    }
                    else
                    {
                        productItems.ProductItem = JsonSerializer.Deserialize<List<ProductItem>>(element.GetRawText(), options);
                    }
                }

                return productItems;
            }
        }

        public override void Write(Utf8JsonWriter writer, Products value, JsonSerializerOptions options)
        {
            throw new NotImplementedException();
        }
    }
    #endregion
}
