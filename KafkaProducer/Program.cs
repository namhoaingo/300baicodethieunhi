using Chr.Avro.Confluent;
using Confluent.Kafka;
using Confluent.SchemaRegistry;
using System;
using System.Threading.Tasks;
using System.Text.Json;
using System.ComponentModel;
using System.Runtime.Serialization;

namespace KafkaProducer
{
    //[DataContract()]
    public class ExampleValue
    {
        public string Property { get; set; }

        // Add new field
        public string Property2 { get; set; }

        // Add Nullable field
        [DefaultValue(null)]
        public string Property3Nullable { get; set; }

        public string CustomerDisplayNameProperty { get; set; }

        //[DataMember(Name = "Property4")]

        //public string CustomerDisplayNamePropertyTrial2 { get; set; }
    }

    public class Program
    {
        public static async Task Main(string[] args)
        {
            var producerConfig = new ProducerConfig()
            {
                BootstrapServers = "localhost:9092"
            };

            var registryConfig = new SchemaRegistryConfig()
            {
                Url = "http://localhost:8081"
            };

            using (var registry = new CachedSchemaRegistryClient(registryConfig))
            {
                var builder = new ProducerBuilder<string, ExampleValue>(producerConfig)
                    .SetAvroValueSerializer(registry, registerAutomatically: AutomaticRegistrationBehavior.Always)
                    .SetErrorHandler((_, error) => Console.Error.WriteLine(error.ToString()));

                using (var producer = builder.Build())
                {
                    await producer.ProduceAsync("my-topic", new Message<string, ExampleValue>
                    {
                        Key = Guid.NewGuid().ToString(), 
                        Value = new ExampleValue
                        {
                            Property = "example!",
                            Property2 = "example2!",
                            Property3Nullable = "example3!",
                            CustomerDisplayNameProperty = "example4!"
                            //CustomerDisplayNamePropertyTrial2 = "example5!"
                        }
                    });
                }
            }
        }
    }
}