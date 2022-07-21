﻿using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
public class mainProgram
{
    public static void Main(string[] args) {
        var summary = BenchmarkRunner.Run<TextJson>();
    }
}

public class TextJson
{
    private readonly JsonSerializerOptions options = new JsonSerializerOptions() { PropertyNameCaseInsensitive = true };
    private const string _jsonStringPascalCase = "{\"MyString\" : \"abc\", \"MyInteger\" : 123, \"MyList\" : [\"abc\", \"123\"]}";
    private const string _jsonStringCamelCase = "{\"myString\" : \"abc\", \"myInteger\" : 123, \"myList\" : [\"abc\", \"123\"]}";
    [Benchmark]
    public MyClass SystemTextCaseSensitive_Pascal()
    {
        return JsonSerializer.Deserialize<MyClass>(_jsonStringPascalCase);
    }
    //[Benchmark]
    //public MyClass SystemTextCaseInsensitive_Pascal()
    //{
    //    return JsonSerializer.Deserialize<MyClass>(_jsonStringPascalCase, options);
    //}
    [Benchmark]
    public MyClass SystemTextCaseSensitive_Camel()
    {
        return JsonSerializer.Deserialize<MyClass>(_jsonStringCamelCase);
    }
    //[Benchmark]
    //public MyClass SystemTextCaseInsensitive_Camel()
    //{
    //    return JsonSerializer.Deserialize<MyClass>(_jsonStringCamelCase, options);
    //}
}

public class MyClass
{
    public int MyInteger { get; set; }
    public string MyString { get; set; }
    public List<string> MyList { get; set; }
}


