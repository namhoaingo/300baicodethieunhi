using Chr.Avro.Confluent;
using Confluent.Kafka;
using Confluent.SchemaRegistry;
using System;

namespace KafkaConsumer
{
    public class ExampleValue
    {
        public string Property { get; set; }
        public string Property2 { get; set; }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            var consumerConfig = new ConsumerConfig()
            {
                BootstrapServers = "localhost:9092",
                GroupId = "consumer_group_10"// Talk about this now
            };

            var registryConfig = new SchemaRegistryConfig()
            {
                Url = "http://localhost:8081"
            };

            Console.WriteLine("Consumer A Start ----");

            using (var registry = new CachedSchemaRegistryClient(registryConfig))
            {
                var builder = new ConsumerBuilder<Ignore, ExampleValue>(consumerConfig)
                    .SetAvroValueDeserializer(registry)
                    .SetErrorHandler((_, error) => Console.Error.WriteLine(error.ToString()));

                using (var consumer = builder.Build())
                {
                    consumer.Subscribe("my-topic");

                    while (true)
                    {
                        var result = consumer.Consume();
                        Console.WriteLine(result.Message.Value.Property);
                        Console.WriteLine(result.Message.Value.Property2);

                    }
                }
            }


        }
    }
}